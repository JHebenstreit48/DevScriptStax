import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomHooks = () => {
  const markdownFilePath = 'FrontEnd/React/Intermediate/ContextAndHooks/CustomHooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Hooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomHooks;
