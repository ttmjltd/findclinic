import Image from "next/image";
import { comments } from "../_mocks_/TestimonialsData";

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto my-10 flex flex-col gap-10 px-6">
      <h2 className="text-2xl sm:text-3xl text-secondary text-center font-bold mb-6">
        What our patients say
      </h2>

      {comments.map((comment, index) => (
        <div
          key={index}
          className={`container mx-auto my-5 flex flex-row ${
            index % 2 === 1 && "flex-row-reverse"
          } items-center gap-6 w-full md:w-5/6`}
        >
          {/* Image section takes 1/3 of the space */}
          <div className="w-1/3 md:w-72 md:h-80">
            <Image
              src={comment.image}
              alt={`Yorum ${index + 1}`}
              width={288}
              height={320}
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>

          {/* Text section takes 2/3 of the space */}
          <div className="w-2/3 sm:px-3">
            <p className="text-gray-800 text-sm sm:text-xl xl:text-2xl mb-4">
              {comment.text}
            </p>
            <p className="text-gray-800 text-xs sm:text-base font-semibold">
              {comment.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
