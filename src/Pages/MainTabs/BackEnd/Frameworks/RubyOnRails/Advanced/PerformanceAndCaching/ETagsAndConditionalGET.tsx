import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
