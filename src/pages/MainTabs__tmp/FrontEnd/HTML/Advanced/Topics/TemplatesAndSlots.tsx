import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TemplatesAndSlots = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/HTMLTemplatesAndSlots';

  return (
    <>
      <PageLayout>
        <PageTitle title="HTML Templates & Slots" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplatesAndSlots;
