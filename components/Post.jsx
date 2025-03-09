import { LikeHeart } from "./SVGs";

const Post = () => {
    return ( 
        <div className=" p-10 m-10  rounded-[12px] bg-[#DDC3C3] min-h-[140px] flex justify-between items-center ">
            <div className="flex gap-3 items-center">
                <img className="bg-white rounded-[50%] h-20 w-20 p-2" alt="profile" src="/images/woman.png"/>
                <div>
                    <h3 className="bold">title : sdfsfdsfsdf</h3>
                    <p>discription : dsfgdsjfglk dklgjldks fgdklfj lk</p>
                </div>
            </div>
            <div className="block">
                <LikeHeart/>
            </div>
        </div>
     );
}
 
export default Post;