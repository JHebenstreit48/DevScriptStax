import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Syntax = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Basics/Fundamentals/Fundamentals/Syntax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Syntax;
