import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const JSONRendering = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/API/JSONRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="JSON Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JSONRendering;
