import { GetServerSideProps } from 'next'
import { supabase } from '@/lib/supabaseClient'

type ProfileProps = {
  user: any
}

export default function Profile({ user }: ProfileProps) {
  return <div>Welcome, {user.email}</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await supabase.auth.getUserByCookie(req)

  if (!data.user) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
    },
  }
}
