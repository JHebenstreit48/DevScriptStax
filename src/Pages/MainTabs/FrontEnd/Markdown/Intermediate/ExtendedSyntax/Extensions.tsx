import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
