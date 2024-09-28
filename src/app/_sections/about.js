

export default function AboutUs()
{
    return(
        <div className="container mx-auto">
        <section className="grid grid-cols-2 lg:grid lg:grid-cols-4 text-center bg-orange-500 text-white py-10">
              <div className="col-span-1 p-10">
                <h2 className="text-5xl mb-1">10+</h2>
                <h2 className="text-2xl mb-1 font-bold">Success Stories</h2>
              </div>
              <div className="col-span-1 p-10">
                <h2 className="text-5xl mb-1">3+</h2>
                <h2 className="text-2xl mb-1 font-bold">Years of Experience</h2>
              </div>

              <div className="col-span-1 p-10">
                <h2 className="text-5xl mb-1">4+</h2>
                <h2 className="text-2xl mb-1 font-bold">Team of Expert</h2>
              </div>

              <div className="col-span-1 p-10">
                <h2 className="text-5xl mb-1">98%</h2>
                <h2 className="text-2xl mb-1 font-bold">Satisfaction Rate</h2>
              </div>
          </section >
          </div>
    )
}