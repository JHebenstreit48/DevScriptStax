import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicsAndSyntax = () => {
  const markdownFilePath =
    'Languages/Python/Basics/Fundamentals/BasicsAndSyntax';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Python Basics - Basics and Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsAndSyntax;