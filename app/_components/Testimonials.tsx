import Image from 'next/image';
import { comments } from '../_mocks_/TestimonialsData';

const Testimonials: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 p-5 m-28">
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
          <p className="text-gray-800 text-base">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
