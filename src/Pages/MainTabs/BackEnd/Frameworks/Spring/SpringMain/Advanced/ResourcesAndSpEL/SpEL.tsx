import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SpEL = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/ResourcesAndSpEL/SpEL';

  return (
    <>
      <PageLayout>
        <PageTitle title="SpEL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpEL;
