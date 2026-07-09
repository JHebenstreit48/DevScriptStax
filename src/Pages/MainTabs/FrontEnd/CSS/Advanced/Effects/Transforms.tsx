import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Transforms = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/Effects/Transform';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Effects - Transform" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transforms;