import { cookies } from 'next/headers';
import UploadFile from './UploadFile';

export default function Page() {
  // Server-side: based on HTTP request cookie only
  const cookieValue = cookies().get('token')?.value;
  console.log('Server-side cookie value:', cookieValue);
  return <UploadFile initial={{ cookieValue }} />;
}
