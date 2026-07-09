import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
