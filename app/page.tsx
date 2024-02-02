import Link from 'next/link'
import BlurImage from '@/components/BlurImage'

export default async function Home() {
  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <BlurImage
        src={'/logo.png'}
        alt='logo'
        width={405}
        height={256}
        className='text-center mx-auto w-80 duration-1000'
      />

      <div className='divider divider-primary text-primary text-3xl font-bold my-10'>
        OUR MENU
      </div>

      <div className='flex flex-wrap justify-between items-center gap-5 p-5'>
        <Link
          href='/restaurant'
          className='w-full md:w-[40%] h-52 lg:h-64 bg-gray-200 flex flex-col justify-center items-center rounded'
        >
          <span className='uppercase font-bold text-my-primary text-3xl'>
            Restaurant
          </span>
        </Link>
        <Link
          href='/coffee'
          className='w-full md:w-[40%] h-52 lg:h-64 bg-gray-200 flex flex-col justify-center items-center rounded'
        >
          <span className='uppercase font-bold text-my-primary text-3xl'>
            Coffee
          </span>
        </Link>
      </div>
    </main>
  )
}
