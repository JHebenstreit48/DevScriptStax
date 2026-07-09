import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActionCable = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/BackgroundAndRealtime/ActionCable';

  return (
    <>
      <PageLayout>
        <PageTitle title="Action Cable" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionCable;
