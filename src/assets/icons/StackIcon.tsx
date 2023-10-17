function StackIcon() {
  return (
    <svg
      width='45'
      height='45'
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='inline align-middle'
    >
      <circle cx='30' cy='30' r='30' fill='#642DFB' />
      <path
        d='M20 35L30 40L40 35'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 30L30 35L40 30'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M30 20L20 25L30 30L40 25L30 20Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default StackIcon;
