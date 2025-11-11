import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { formatDate } from "../../../utils/formateDate";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatData = (blogs) => {
  return blogs.map((blog) => ({
    name: formatDate(blog.createdAt),
    post: blog.title.length,
    pv: blog.pageViews || 0,
    amt: blog.amt || 0,
  }));
};

const BlogsChart = ({ blogs }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = formatData(blogs);

  if (!mounted)
    return <div className="text-center p-4">Cargando gráfica...</div>;

  return (
    <div className="p-2 bg-bgPrimary rounded-lg shadow-md w-full min-w-0">
      <h2 className="text-xl font-semibold mb-4">Gráfica</h2>
      <div className="w-full min-w-0 h-[400px]">
        <ResponsiveContainer width="99%" height={400}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="post"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// ✅ Validación de props
BlogsChart.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      pageViews: PropTypes.number,
      amt: PropTypes.number,
    })
  ).isRequired,
};

export default BlogsChart;
