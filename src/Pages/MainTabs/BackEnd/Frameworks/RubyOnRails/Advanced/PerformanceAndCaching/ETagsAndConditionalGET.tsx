import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ETagsAndConditionalGET = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/PerformanceAndCaching/ETagsAndConditionalGET';

  return (
    <>
      <PageLayout>
        <PageTitle title="ETags & Conditional GET" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ETagsAndConditionalGET;
