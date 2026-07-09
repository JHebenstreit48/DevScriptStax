import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Extensions = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Intermediate/ExtendedSyntax/Extensions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Extensions (CommonMark, GFM)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Extensions;
