import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DisableAndInline = () => {
  const markdownFilePath = 'Tools/CodeQuality/StandardJS/Advanced/Customization/DisableAndInline';

  return (
    <>
      <PageLayout>
        <PageTitle title="Disable & Inline" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DisableAndInline;
