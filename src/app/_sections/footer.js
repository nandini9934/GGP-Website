

export default function Footer()
{
    return(
        < section className="container mx-auto">
          <div className="relative flex flex-col items-center justify-center h-full mt-20 bg-peach">
            <div className="text-center mb-16">
              <h1 className="text-5xl  font-serif text-orange-500 pt-32">Let’s Make this happen</h1>
              <h2 className="text-8xl  text-orange-500 font-serif mt-2 mb-72">Together</h2>
            </div>
            <div className="absolute text-center text-white bottom-0 w-full bg-[#f27c21] h-[200px] rounded-t-full">
              <p className="text-sm pt-24 font-bold">©2024 Good Gut Project. All Rights Reserved.</p>
            </div>
          </div>
        </section >
    )
}