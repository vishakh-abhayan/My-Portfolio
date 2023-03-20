import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          dignissimos ratione velit est ex eius in nemo? Distinctio id quis
          dolor dolore cum placeat cupiditate expedita omnis, in iusto
          exercitationem, nemo, possimus veritatis et cumque ratione nostrum
          sapiente aliquam mollitia officiis est laboriosam reprehenderit saepe
          necessitatibus. Sunt explicabo vero vitae!
        </p>
        <br />
        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          voluptatibus, quia magnam nobis autem placeat est nostrum eaque nam.
          Dolorum reprehenderit fugiat adipisci alias officia commodi modi iure
          in quisquam. Autem, corporis totam dolores molestiae beatae voluptas
          quibusdam. Mollitia ea earum quasi maxime illo quos repudiandae
          tempore nostrum iusto at.
        </p>
      </div>
    </div>
  );
}

export default About;
