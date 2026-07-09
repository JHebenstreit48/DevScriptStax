import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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