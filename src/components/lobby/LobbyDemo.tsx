// Import only the parts this scene uses, so the kit's phone and message CSS stay out of the bundle
import { Stage } from '../../kit/stage'
import type { Act } from '../../kit/act'
import { Bar, Window } from '../../kit/window'
import { Collapse, Roll, Swap } from '../../kit/motion'
import { Avatar, Meter, Spinner } from '../../kit/parts'
import { Badge, Button } from '../../kit/controls'
import './lobby.css'

// Son Hasat's LAN lobby, illustrated: the host waits, three friends join over
// the local network one by one, each turns Ready on their own pill, the count
// rolls to 4/4, the host presses Start and chapter 1 begins loading.
//
// Beats: join (row fills, Connecting) -> Ready, three times, overlapping;
// 4/4 lights the Start button; the cursor presses it; the button turns to
// Starting on itself and the chapter strip opens under the header with its
// meter filling. Plays once; the poster is the finished scene.
//
// Real strings: the game, Lobby, the address, the count, the four names,
// their status, Start and the chapter. The chat panel on the right is filler.

type Lang = 'tr' | 'en'
type Slot = 'empty' | 'joining' | 'ready'
type S = { slots: [Slot, Slot, Slot]; launch: boolean; load: number }

const STR = {
  tr: { lobby: 'Lobi', start: 'Başlat', starting: 'Başlatılıyor', host: 'Host', joining: 'Bağlanıyor', ready: 'Hazır', empty: 'Boş yuva', player: (n: number) => `Oyuncu ${n}`, chapter: 'Bölüm 1 · Solgun Topraklar' },
  en: { lobby: 'Lobby', start: 'Start', starting: 'Starting', host: 'Host', joining: 'Connecting', ready: 'Ready', empty: 'Open slot', player: (n: number) => `Player ${n}`, chapter: 'Chapter 1 · Pale Lands' },
}

const initial: S = { slots: ['empty', 'empty', 'empty'], launch: false, load: 0 }
const poster: S = { slots: ['ready', 'ready', 'ready'], launch: true, load: 1 }

async function script(a: Act<S>) {
  const set = (i: number, v: Slot) =>
    a.put((s) => {
      const slots = [...s.slots] as S['slots']
      slots[i] = v
      return { slots }
    })
  await a.wait(900)
  for (let i = 0; i < 3; i++) {
    a.mark(`join-${i + 2}`)
    set(i, 'joining')
    await a.wait(650)
    set(i, 'ready')
    await a.wait(i < 2 ? 450 : 900)
  }
  a.mark('press')
  await a.click({ at: 'start', x: 0.5, y: 0.5 })
  a.put({ launch: true })
  await a.wait(450)
  for (let k = 1; k <= 8; k++) {
    a.put({ load: k / 8 })
    await a.wait(260)
  }
  await a.move({ at: 'start', x: 0.6, y: 2.4 })
  await a.wait(2400)
}

export default function LobbyDemo({ lang = 'tr' }: { lang?: Lang }) {
  const t = STR[lang]
  return (
    <Stage<S>
      width={720}
      height={420}
      compact={{ below: 640, width: 358, height: 400 }}
      theme="dark"
      accent="#2a6cf0"
      tokens={{ '--ss-font': '"Geist", system-ui, sans-serif' }}
      initial={initial}
      poster={poster}
      script={script}
      play="once"
      cursor={{ at: { wide: { x: 680, y: 380 }, compact: { x: 330, y: 380 } } }}
      className="lobby"
    >
      {(s, _rect, layout) => {
        const count = 1 + s.slots.filter((v) => v !== 'empty').length
        const allReady = s.slots.every((v) => v === 'ready')
        const body = (
            <div className="lb-body">
              <div className="lb-main">
                <div className="lb-head">
                  <div className="lb-title">
                    {t.lobby}
                    <span className="lb-count"><Roll>{`${count}/4`}</Roll></span>
                  </div>
                  <span className="lb-addr">192.168.1.24:7777</span>
                  <Button
                    variant={allReady ? 'primary' : 'secondary'}
                    className="lb-start"
                    data-target="start"
                    data-cursor="pointer"
                    data-off={!allReady || undefined}
                  >
                    {s.launch ? `${t.starting}…` : t.start}
                  </Button>
                </div>

                <Collapse open={s.launch} reveal="drop">
                  <div className="lb-load">
                    <span className="lb-chapter">{t.chapter}</span>
                    <Meter value={s.load} tone="accent" className="lb-meter" />
                  </div>
                </Collapse>

                <div className="lb-list">
                  <PlayerRow name="Deniz" state="ready" host t={t} />
                  {s.slots.map((v, i) => (
                    <PlayerRow key={i} name={t.player(i + 2)} state={v} t={t} />
                  ))}
                </div>
              </div>
              <ChatPanel />
            </div>
        )
        // A phone column has no room for a desktop window's shape: the lobby
        // panel alone, pinned at the top and running off the bottom
        return layout === 'wide'
          ? <Window title="Son Hasat" className="lobby-win">{body}</Window>
          : <div className="lb-panel">{body}</div>
      }}
    </Stage>
  )
}

function PlayerRow({ name, state, host, t }: { name: string; state: Slot; host?: boolean; t: (typeof STR)[Lang] }) {
  const filled = state !== 'empty'
  return (
    <div className="lb-row" data-filled={filled || undefined}>
      <span className="lb-av">
        <span className="lb-av__empty" />
        <Avatar name={name} size={28} tone={host ? 'accent' : 'person'} className="lb-av__face" />
      </span>
      <span className="lb-name">
        <span className="lb-name__empty">{t.empty}</span>
        <span className="lb-name__face">{name}{host && <span className="lb-host">{t.host}</span>}</span>
      </span>
      <span className="lb-status">
        {filled && (
          <Badge
            tone={state === 'ready' ? 'success' : 'neutral'}
            className="lb-badge"
            icon={<span className="lb-mark" data-ready={state === 'ready' || undefined}><Spinner size={8} /><i className="lb-dot" /></span>}
          >
            {host ? t.ready : <Swap id={state}>{state === 'ready' ? t.ready : t.joining}</Swap>}
          </Badge>
        )}
      </span>
      <span className="lb-ping"><Bar w={host ? 24 : [30, 22, 28][name.length % 3]} h={6} tone={1} /></span>
    </div>
  )
}

function ChatPanel() {
  return (
    <aside className="lb-chat">
      {[132, 96, 150, 84, 118].map((w, i) => (
        <span key={i} className="lb-msg">
          <Bar w={14} h={14} r={7} tone={2} />
          <span className="lb-msg__lines">
            <Bar w={48} h={6} tone={2} />
            <Bar w={w} h={6} tone={1} />
          </span>
        </span>
      ))}
    </aside>
  )
}
