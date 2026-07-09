import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JDBCTemplate = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Data/JDBCTemplate';

  return (
    <>
      <PageLayout>
        <PageTitle title="JDBC Template" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JDBCTemplate;
