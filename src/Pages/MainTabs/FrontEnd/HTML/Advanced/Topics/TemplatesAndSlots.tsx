import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
