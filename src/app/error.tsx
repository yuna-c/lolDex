'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { startTransition, useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  const { refresh } = useRouter()

  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        <div className="txt">
          <h2 className="font-bold">문제가 발생했습니다!</h2>
          <p className="mt-8 flex">
            {error.message}
          </p>
        </div>

        <Button
          onClick={() =>
            startTransition(() => {
              refresh()
              reset()
            })
          }
        >
          다시 시도하기
        </Button>
      </article>
    </section>
  )
}
