import PageLayout from '@/Components/NavigationUI/PageLayout'
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Attributes = () => {
  const markdownFilePath = 'FrontEnd/HTML/Basics/Structure/Attributes';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Structure - Attributes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Attributes;