import Image from 'next/image';

export default function About() {
  return (
    <section className="w-screen bg-blue mt-12">
      <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl">Activities</h5>
        <p className="text-2xl  uppercase font-light">
          EduHub insitute of Technology
        </p>
        <p className="w-3/5 text-center text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore neque
          voluptatem fuga id quisquam magnam ipsum? Delectus sed iusto unde,
          molestias fuga pariatur quibusdam quisquam id obcaecati cumque
          aspernatur repudiandae!
        </p>

        <div className="flex justify-center item-center gap-6">
          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2020/09/29/10/42/library-5612441_1280.jpg"
            width="auto"
            alt="image"
          />

          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2017/05/25/21/29/dublin-2344423_1280.jpg"
            width="auto"
            alt="image"
          />

          <img
            className="w-1/4 shadow-lg hover:shadow-2xl"
            src="https://cdn.pixabay.com/photo/2017/03/27/13/03/book-2178586_1280.jpg"
            width="auto"
            alt="image"
          />
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md">View More</button>
      </div>
    </section>
  );
}
