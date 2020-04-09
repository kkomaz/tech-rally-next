import { BlogForm } from 'components/Blog';
import { useRouter } from 'next/router'

function BlogsIdEditPage() {
  const router = useRouter()

  const onSubmitSuccess = () => {
    router.push('/blogs');
  }

  return (
    <div className="container">
      <BlogForm onSubmitSuccess={onSubmitSuccess} />
    </div>
  )
}

export default BlogsIdEditPage