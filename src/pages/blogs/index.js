// https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "multipart/form-data; boundary=--------------------------311634474600324725072798");

// var formdata = new FormData();
// formdata.append("image", fileInput.files[0], "landing-page.png");
// formdata.append("title", "whats up");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("http://localhost:8080/api/blogs/create?image", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
import { Button } from 'reactstrap';
import Link from 'next/link';

function BlogsPage() {
  return (
    <div className="container">
      <Link href="/blogs/create">
        <Button color="primary">
          Create Blog
        </Button>
      </Link>
    </div>
  )
}

export default BlogsPage