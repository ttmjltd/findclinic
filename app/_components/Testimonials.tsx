import Image from 'next/image';
import { comments } from '../_mocks_/TestimonialsData';




const Testimonials: React.FC = () => {
  return (
<div className="container mx-auto py-8 ">
 <div className="w-[900px] h-[675px]  m-4 flex flex-col gap-2 pt-8 ">
  <span className="text-2xl text-secondary text-center font-bold">
  What our patients say
  </span>
 
 

      {comments.map((comment, index) => (
        <div
          key={index}
          className={`flex items-center gap-6 ${comment.reverse ? 'flex-row-reverse' : ''} flex-row`}
        >
          
          <Image
            src={comment.image}
            alt={`Yorum ${index + 1}`}
            width={228}
            height={128}
            className="object-cover rounded-lg"
          />
          
          <div>
          <p className="text-gray-800 text-base">{comment.text}</p><br/>
          <p className="text-gray-800 text-base">{comment.name}</p>
           </div>
        </div>
       
      ))}
    </div> 
    </div>
  );
};

export default Testimonials;
