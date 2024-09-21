import ReactPlayer from "react-player";


interface FacebookVideoEmbedProps {
  url: string;
}

const FacebookVideoEmbed: React.FC<FacebookVideoEmbedProps> = ({ url }) => {
  return (
    
     
        <div className="w-full">
          <ReactPlayer url={url} controls width="100%" height="auto" />
        </div>


  );
};

export default FacebookVideoEmbed;
