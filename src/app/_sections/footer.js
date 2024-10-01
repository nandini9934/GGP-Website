

export default function Footer() {
  return (
    <div className="lg:bg-peach">
      < section className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center h-[550px] bg-peach">
          <div className="text-center">
            <h1 className="text-5xl font-serif text-orange-500">Let’s Make this happen</h1>
            <h2 className="text-8xl text-orange-500 font-serif mt-4">Together</h2>
          </div>
          <div className="absolute bottom-0 w-full bg-[#f27c21] h-[100px] rounded-t-full">
            <div className="absolute bottom-4 w-full flex justify-center">
              <p className="text-sm text-white font-bold">©2024 Good Gut Project. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section >
    </div>
  )
}