import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
