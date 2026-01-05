import BlogCard from "../components/homepage/blog/blog-card"; // path adjust karo

const links = [
  "https://www.instagram.com/reel/DLNnB2OS3-M/?igsh=MXdtenNuMXZ4bzR1cA==",
  "https://www.instagram.com/reel/DMGR9FdSCkx/?igsh=MWVxaTUyOWg3OTB1aA==",
  "https://www.instagram.com/reel/DBwU5shsRhh/?igsh=Zms1OTBobzZ2eGxt",
  "https://www.instagram.com/reel/DDSagdUvBYE/?igsh=MXg5NHoxbjR2OHpnMQ==",
  "https://www.instagram.com/reel/DIb9wCqB9wo/?igsh=MXd5MWw3cnJjc2JuNw==",
  "https://www.instagram.com/reel/DLLKobHy7Uo/?igsh=MXNwZXdtbnl3MGlqaQ==",
  "https://www.instagram.com/reel/DB5uxZ_hB0q/?igsh=MThiMGJjczdscjQ3dg==",
  "https://www.instagram.com/reel/DOrRXFpEvT6/?igsh=MXRuOHZ1dWppbXIzMA==",
  "https://www.instagram.com/reel/DDIFsVNByXc/?igsh=bWRicm04bHIzdmtw",
];

function page() {
  return (
    <div className="py-8">
       
      {/* SECTION HEADING */}
      <div className="flex justify-center my-6">
        <span className="bg-[#1a1443] text-white px-6 py-2 rounded-md text-2xl">
          Interest
        </span>
      </div>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <BlogCard key={i} image={`sg${i + 1}.jpg`} link={links[i]} />
        ))}
      </div>

    </div>
  );
}

export default page;

