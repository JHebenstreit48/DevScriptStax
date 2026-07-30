import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BasicsAndSyntax = () => {
  const markdownFilePath =
    'Languages/Python/Basics/Fundamentals/BasicsAndSyntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="Python Basics - Basics and Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsAndSyntax;