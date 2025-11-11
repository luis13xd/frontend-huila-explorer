import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FiUsers } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { PiMapPinAreaBold } from "react-icons/pi";
import { useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { useGetCommentsQuery } from '../../../redux/features/comments/commentApi';
import { useGetUserQuery } from '../../../redux/features/auth/authApi';
import BlogsChart from './BlogsChart';

const Dashboard = () => {

  const [query, setQuery] = useState({ search: '', category: '' });
  const { user } = useSelector((state) => state.auth);
  const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
  const { data: comments = [] } = useGetCommentsQuery();
  const { data: users = {} } = useGetUserQuery();
  const adminCounts = users.users?.filter(user => user.role === 'admin').length;

  return (
    <>
      {isLoading && (<div>Cargando...</div>)}
      <div className='space-y-2'>

        <div className='bg-bgPrimary p-2'>
          <h1>Hola {user?.username}, bienvenido al dashboard de administrador.</h1>
        </div>

        <div className='flex flex-col md:flex-row '>
          <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
            <FiUsers className='size-8 text-indigo-600' />
            <p>{users.users?.length} usuario{users.users?.length !== 1 ? 's' : ''}</p>
          </div>

          <div className='bg-red-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
            <PiMapPinAreaBold className='size-9 text-red-600' />
            <p>{blogs.length} Sitios</p>
          </div>

          <div className='bg-lime-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
            <RiAdminLine className='size-8 text-lime-600' />
            <p>{adminCounts} Admin{adminCounts !== 1 ? 's' : ''}</p>
          </div>

          <div className='bg-orange-100 py-6 w-full rounded-sm space-y-1 flex flex-col items-center'>
            <FaRegComment className='size-8 text-orange-600' />
            <p>{comments?.totalComment} Comentarios</p>
          </div>
        </div>

        <div className='pb-1'>
          <BlogsChart blogs={blogs} />
        </div>

      </div>
    </>
  )
}

export default Dashboard