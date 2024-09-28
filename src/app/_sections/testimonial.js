import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';

export default function Testimonial()
{
    return(
        < section className="container mx-auto">
        <h6 className="text-slate-400 font-bold mt-28 mb-5 text-center text-lg">Testimonials</h6>
        <h2 className="font-medium text-4xl font-serif text-slate-700 mx-20 mb-6 text-center">See what people say about us</h2>
        <div className='mx-14'>
          <div className='rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15'>
            <div className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4'>
              Good Gut Project has completely transformed my approach to eating and health. Since starting their customised diet plan,I've lost 25 pounds and feel more vibrant than ever.The recipes are not only nutritious but also inctredibly tasty, making it easy to stick to the plan. The team provides outstanding support and keeps me motivated every step of the way.
            </div>
            <div className="flex space-x-1 justify-center">
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
            </div>
            <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
            <p className='text-center font-bold text-base'>-- Kabir Singh</p>
            <p className='text-center text-slate-400 text-xs mb-5'>IT Professional</p>
          </div>
          <div className='rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15'>
            <div className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4'>
              Good Gut Project has completely transformed my approach to eating and health. Since starting their customised diet plan,I've lost 25 pounds and feel more vibrant than ever.The recipes are not only nutritious but also inctredibly tasty, making it easy to stick to the plan. The team provides outstanding support and keeps me motivated every step of the way.
            </div>
            <div className="flex space-x-1 justify-center">
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
            </div>
            <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
            <p className='text-center font-bold text-base'>-- Kabir Singh</p>
            <p className='text-center text-slate-400 text-xs mb-5'>IT Professional</p>
          </div>
          <div className='rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15'>
            <div className='text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4'>
              Good Gut Project has completely transformed my approach to eating and health. Since starting their customised diet plan,I've lost 25 pounds and feel more vibrant than ever.The recipes are not only nutritious but also inctredibly tasty, making it easy to stick to the plan. The team provides outstanding support and keeps me motivated every step of the way.
            </div>
            <div className="flex space-x-1 justify-center">
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
              <i className="fas fa-star text-orange-500 text-3xl"></i>
            </div>
            <img src='/food.jpg' className='h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full' />
            <p className='text-center font-bold text-base'>-- Kabir Singh</p>
            <p className='text-center text-slate-400 text-xs mb-5'>IT Professional</p>
          </div>
        </div>
      </section >
    )
}