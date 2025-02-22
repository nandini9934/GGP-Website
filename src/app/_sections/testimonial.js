import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";

export default function Testimonial() {
  return (
    <section className="container mx-auto">
      <h6 className="text-slate-400 font-bold mt-28 mb-5 text-center text-lg">
        Testimonials
      </h6>
      <h2 className="font-medium text-4xl font-serif text-slate-700 mx-20 mb-6 text-center">
        See what people say about us
      </h2>
      <div className="mx-14 grid grid-cols-1 lg:grid-cols-3 lg:grid lg:gap-6 ">
        <div className="col-span-1 rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15">
          <div className="text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4 ">
            Good Gut Project has completely transformed my approach to eating
            and health. Since starting their customised diet plan,I've lost 25
            pounds and feel more vibrant than ever.The recipes are not only
            nutritious but also inctredibly tasty, making it easy to stick to
            the plan. The team provides outstanding support and keeps me
            motivated every step of the way.
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
          </div>
          <img
            src="/Rahul.png"
            className="h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full"
          />
          <p className="text-center font-bold text-base">-- Rahul Maheshwari</p>
          <p className="text-center text-slate-400 text-xs mb-5">
            IT Professional
          </p>
        </div>
        <div className="col-span-1 rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15">
          <div className="text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4">
            I cannot express enough gratitude for the impact the Good Gut
            Project has had on my health and well-being. Their expertise in gut
            health, personalized approach, and dedication to education have
            truly transformed my lifestyle. From insightful resources to
            practical guidance, they make improving digestive health accessible
            and achievable. Highly recommended for anyone looking to take
            control of their gut health!
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
          </div>
          <img
            src="/sonali.png"
            className="h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full"
          />
          <p className="text-center font-bold text-base">-- Sonali Sharma</p>
          <p className="text-center text-slate-400 text-xs mb-5">
            IT Professional
          </p>
        </div>
        <div className="col-span-1 rounded-lg shadow-lg w-full bg-peach mr-3 my-20 py-3 px-15">
          <div className="text-start font-medium mx-5 text-orange-500 text-sm space-y-4 py-4">
            The Good Gut Project has been a game-changer for me! Their expert
            guidance and holistic approach to gut health have helped me improve
            my digestion, boost my energy, and feel overall healthier. The team
            is incredibly knowledgeable, supportive, and genuinely committed to
            helping people achieve better well-being. I highly recommend their
            services to anyone looking to improve their gut health naturally!"
            Let me know if you’d like any adjustments!
          </div>
          <div className="flex space-x-1 justify-center">
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
            <i className="fas fa-star text-orange-500 text-3xl"></i>
          </div>
          <img
            src="/Shid.png"
            className="h-36 w-36 pt-5 pb-3 px-4 mx-auto rounded-full"
          />
          <p className="text-center font-bold text-base">-- Sourabh Mehta</p>
          <p className="text-center text-slate-400 text-xs mb-5">
            IT Professional
          </p>
        </div>
      </div>
    </section>
  );
}
