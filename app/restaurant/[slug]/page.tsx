'use client'

import RestaurantItem from '@/components/RestaurantItem'
import { getItemsByCategory } from '@/data/restaurant'
import { useParams } from 'next/navigation'

export default function Category() {
  const params = useParams()
  const { slug } = params as { slug: string }

  const reverseSlugGenerator = (text: string) => {
    return text.split('-').join(' ')
  }
  return (
    <main className='max-w-6xl mx-auto py-5 px-2 md:p-5'>
      <div className='flex flex-wrap gap-y-5 mt-5 md:mt-5'>
        {getItemsByCategory(reverseSlugGenerator(slug)).map(
          (category, i: number) => (
            <div key={i} className='w-[48%] md:w-[30%] lg:w-[24%] mx-auto'>
              <RestaurantItem item={category} />
            </div>
          )
        )}
      </div>
    </main>
  )
}
