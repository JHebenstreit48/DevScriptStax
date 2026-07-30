import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Config = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/Config';

  return (
    <>
      <PageLayout>
        <PageTitle title="Config (JavaConfig/XML)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Config;
