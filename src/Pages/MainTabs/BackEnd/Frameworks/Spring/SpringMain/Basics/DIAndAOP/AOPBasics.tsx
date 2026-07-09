import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AOPBasics = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/DIAndAOP/AOPBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="AOP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AOPBasics;
