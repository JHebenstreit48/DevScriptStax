import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StartersAndAutoConfig = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Basics/Fundamentals/StartersAndAutoConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="Starters & Auto-Config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StartersAndAutoConfig;
