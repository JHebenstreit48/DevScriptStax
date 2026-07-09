import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
