import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-container">
      <header>
      Welcome To Doctor Simulator !
      </header>
      <img src="/img/bear_doctor.png"></img>
      <a href="/about" id="begin">Begin</a>
    </main>
  )
}
