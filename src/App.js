const Title = () => {
  return (
    <h1 className='text-4xl font-mono font-semibold text-center'>
      José Carlos Zancanaro
    </h1>
  )
}

const About = () => {
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  )
}

const Social = () => {
  return (
    <>
      <div>
        <div>
          <a title='GitHub' href='https://github.com/JoseZancanaro' target='_blank' rel='noopener'>
            <svg width='32' height='32' viewBox='0 0 24 24'>
              <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
            </svg>
          </a>
          <p/>GitHub<p/>
        </div>

        <div>
          <a title='LinkedIn' href='https://www.linkedin.com/in/jose-zancanaro' target='_blank' rel='noopener'>
            <svg width='32' height='32' viewBox='0 0 24 24'>
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
            </svg>
          </a>
          <p/>LinkedIn<p/>
        </div>

        <div>
          <a title='Curriculum Vitae' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noopener'>
            <svg width='32' height='32' viewBox='0 0 24 24'>
              <path d="M7 22v-16h14v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-5.362zm16-7.614v-10.386h-18v20h8.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-4v-1h4v1zm6-4h-10v1h10v-1zm0-3h-10v1h10v-1zm1-7h-17v19h-2v-21h19v2z"/>
            </svg>
          </a>
          <p/>Curriculum Vitae<p/>
        </div>
      </div>

    </>
  )
}

const SimpleWebsite = () => {
  return (
    <>
      <Title/>
      <About/>
      <Social/>
    </> 
  );
}

export default SimpleWebsite;