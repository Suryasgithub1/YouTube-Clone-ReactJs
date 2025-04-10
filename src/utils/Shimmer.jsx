import React from 'react'

const ShimmerMainPage = () => {
  const numberOfTimes = 6;
  return (
    <div className="flex flex-wrap">
      {Array.from({ length: numberOfTimes }).map((_, index) => (
        <div
          key={(index)}
          className="mt-10 mb-6 ml-10 w-88 border-0 rounded-lg cursor-pointer hover:shadow-lg"
        >
          <img
            className="w-full border-0 rounded-lg h-[200px]"
            src="https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY="
            alt="Grey Shimmer box"
          />
          <img
            className="w-full h-[20px] border-0 rounded-lg mt-2 mb-2"
            src="https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY="
            alt="Grey Shimmer box"
          />
          <img
            className="w-[170px] h-[20px] border-0 rounded-lg mt-2 mb-2"
            src="https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY="
            alt="Grey Shimmer box"
          />
          <div className="flex">
            <img
              className="w-45 h-[20px] border-0 rounded-lg mt-2 mb-2"
              src="https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY="
              alt="Grey Shimmer box"
            />
            <img
              className="w-45 h-[20px] border-0 rounded-lg mt-2 mb-2"
              src="https://media.istockphoto.com/id/670648260/photo/gray-cardboard-sheet-abstract-texture-background.jpg?s=612x612&w=0&k=20&c=0BAxyPqUQNMIfzzs70dTAla6sWc0T_2zJPJn_BOLiuY="
              alt="Grey Shimmer box"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShimmerMainPage;