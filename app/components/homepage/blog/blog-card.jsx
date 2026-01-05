import Image from "next/image";
import Link from "next/link";

function BlogCard({ image, link }) {
  return (
    <div className="border border-[#1d293a] bg-[#1b203e] rounded-lg overflow-hidden group">
      
      {/* Image with hover zoom */}
      <div className="h-44 lg:h-52 w-full overflow-hidden">
        <Image
          src={`/image/${image}`}
          width={1920}
          height={1080}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Button with hover effect */}
      <div className="p-3 flex justify-center">
        <Link href={link} target="_blank">
          <button className="
            bg-violet-500 text-white px-4 py-1 rounded-full text-sm 
            cursor-pointer 
            transition-transform duration-200 ease-out 
            hover:scale-105 hover:bg-violet-600
          ">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;


